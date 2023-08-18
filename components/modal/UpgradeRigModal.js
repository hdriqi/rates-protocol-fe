'use client'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Skeleton } from '@nextui-org/react'
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../constants/common'
import { useEffect, useState } from 'react'
import IconMinus from '../icons/IconMinus'
import IconPlus from '../icons/IconPlus'
import { formatUnits } from 'ethers/lib/utils'

const UpgradeRigModal = ({ isOpen, onClose }) => {
  const [level, setLevel] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const address = useAddress()
  const { contract } = useContract(CONTRACT_ADDRESS, CONTRACT_ABI)
  const { data: miningRigUpgradePrice } = useContractRead(contract, 'miningRigUpgradePrice')
  const { data: maximumRigLevel } = useContractRead(contract, 'maximumRigLevel')
  const { data: miningRigForAddress } = useContractRead(contract, 'miningRigForAddress', [address])
  const { data: miningRigPercentage } = useContractRead(contract, 'miningRigPercentage', [parseInt(level || '0')])

  const isMinimumLevel = level === (miningRigForAddress || 0)

  useEffect(() => {
    setLevel(miningRigForAddress || 0)
  }, [miningRigForAddress])

  const onUpgradeRig = async () => {
    setIsLoading(true)
    try {
      await contract.call('upgradeMiningRig', [level], {
        value: miningRigUpgradePrice?.mul(level),
      })
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
    onClose()
  }

  return (
    <Modal size="sm" isOpen={isOpen} onClose={onClose} className="dark text-foreground bg-background">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <div>
            <p>Upgrade Rig</p>
            <p className="text-xs font-normal">Mining more by upgrading your rig.</p>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="flex justify-between gap-4">
            <p className="self-center flex-1 font-bold">Upgrade to level</p>
            <Button
              isDisabled={isMinimumLevel}
              isIconOnly
              color="danger"
              size="sm"
              onClick={() => setLevel((lvl) => lvl - 1)}
            >
              <IconMinus />
            </Button>
            <p className="text-center self-center font-bold">{level}</p>
            <Button
              isDisabled={maximumRigLevel === level}
              isIconOnly
              color="danger"
              size="sm"
              onClick={() => setLevel((lvl) => lvl + 1)}
            >
              <IconPlus />
            </Button>
          </div>
          <div />
          <div>
            <div className="flex items-center justify-between text-sm">
              <p>Total Price</p>
              <p>{miningRigUpgradePrice ? formatUnits(miningRigUpgradePrice?.mul(level), 18) : 0} ETH</p>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p>Percentage Increase</p>
              <div>
                {miningRigPercentage ? `${miningRigPercentage}%` : level ? <Skeleton className="h-2.5 w-5" /> : '-'}
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button isDisabled={isMinimumLevel} isLoading={isLoading} color="danger" radius="none" onPress={onUpgradeRig}>
            Upgrade
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default UpgradeRigModal

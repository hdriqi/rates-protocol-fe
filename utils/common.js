export const truncateAddr = (addr) => {
  return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4, addr.length)}`
}
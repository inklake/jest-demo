export const forEach = <T>(items: T[], callback: (value: T) => {}) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

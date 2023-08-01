const getCounter = async function () {
  const randomCount = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100))
    }, 1000)
  })

  return {
    randomMethod: 'Math.random()',
    count: randomCount,
  }
}

export default defineEventHandler(getCounter)

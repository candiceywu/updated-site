export async function verifyLogin({ password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === 'CandoandLianCDMX') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

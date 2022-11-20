const delay = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('> delay -> setTimeout ready');
      resolve(123);
    }, time);
  });

  export {delay};
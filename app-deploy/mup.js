module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '104.131.93.128',
      username: 'bgeils',
      pem: "~/.ssh/id_rsa",
      // password: 'pass-here'
      // or neither for authenticate from ssh-agent
    }
  },

  meteor: {
    // TODO: change app name and path
    name: 'lime',
    path: '/Users/bgeils/workspace/code4good/src',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://code.sodimasolutions.com'
    },

   //   ssl: { // (optional)
   //     // Enables let's encrypt (optional)
		 // // crt: './cert.pem', // this is a bundle of certificates
		 // // key: './privkey.pem', // this is the private key of the certificate
		 // // port: 443 
   //   },

    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
		image: 'abernix/meteord:base',
      // imagePort: 80, // (default: 80, some images EXPOSE different ports)
    },

    // This is the maximum time in seconds it will wait
    // for your app to start
    // Add 30 seconds if the server has 512mb of ram
    // And 30 more if you have binary npm dependencies.
    deployCheckWaitTime: 60,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  }







  
};

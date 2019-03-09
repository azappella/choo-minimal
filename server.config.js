module.exports = {
  apps : [
    {
      name: `${process.env.PROCESS_NAME}-dev`,
      script: 'bin/www',
      autorestart: true,
      watch: ['src'],
      ignore_watch : ['node_modules', '.git', '.dat', '.cache', 'public', 'dist'],
    },
    {
      name: `${process.env.PROCESS_NAME}`,
      script: 'bin/www',
      autorestart: true,
      watch: false,
    }
  ]
};

module.exports = [
  {
    label: 'backups',
    submenu: [
      {
        label: 'about',
        click() {
          console.log('click')
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit'
      }
    ]
  }
]

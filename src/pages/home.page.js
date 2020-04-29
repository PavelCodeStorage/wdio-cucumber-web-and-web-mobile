class HomePage {
  static getLogo() {
    return $('.onliner_logo')
  }

  static async open() {
    await browser.url('/')
  }
}
export default HomePage

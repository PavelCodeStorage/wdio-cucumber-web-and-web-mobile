import { Then } from 'cucumber'
import { assert } from 'chai'
import HomePage from '../pages/home.page'

Then(/^Home page is appeared$/, async () => {
  const logo = await HomePage.getLogo()
  const isDisplayed = await logo.isDisplayed()
  assert.isTrue(isDisplayed)
})

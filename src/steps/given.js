import { Given } from 'cucumber'
import HomePage from '../pages/home.page'

Given(/^User open web application$/, async () => {
  await HomePage.open()
})

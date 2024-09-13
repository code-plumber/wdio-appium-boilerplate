import LoginScreen from '../screens/login.screen'
import commonScreen from '../screens/common.screen';
import testData from '../../data/prod-data.json';

describe('Login Screen', () => {
    xit('Candidate user should be able to sing in', async () => {
        const userPassword = process.env.DEFAULT_PASSWORD || '<PASSWORD>'

        await LoginScreen.usernameField.click()
        // instead of hard-coded candidate try to find based on criteria e.e testData.client.candidates.find(c => c.firstName == 'Usman').email
        await LoginScreen.usernameField.setValue(testData.client.candidates[0].email)

        await LoginScreen.passwordField.click()
        await LoginScreen.passwordField.setValue(userPassword)

        await LoginScreen.singinBtn.click()
        await commonScreen.logoutButton.click()
        
    })

    it('Client user should be able to sing in', async () => {
        const userPassword = process.env.DEFAULT_PASSWORD || '<PASSWORD>'

        await LoginScreen.usernameField.click()
        // instead of hard-coded user try to find based on criteria e.e testData.client.users.find(u => u.firstName == 'Usman').username
        await LoginScreen.usernameField.setValue(testData.client.users[0].username)

        await LoginScreen.passwordField.click()
        await LoginScreen.passwordField.setValue(userPassword)

        await LoginScreen.singinBtn.click()
        await commonScreen.logoutButton.click()
    
    })
})


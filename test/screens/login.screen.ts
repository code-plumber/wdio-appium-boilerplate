import { $ } from '@wdio/globals'


class LoginScreen {

    get usernameField() {
        return $(`android=new UiSelector().className("android.widget.EditText").instance(0)`)
    }

    get passwordField() {
        return $(`android=new UiSelector().className("android.widget.EditText").instance(1)`)
    }

    get singinBtn() {
        return $(`android=new UiSelector().description("Sign in")`)
    }
}

export default new LoginScreen();

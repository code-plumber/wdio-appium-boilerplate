import { $ } from '@wdio/globals'


class Common {

    get logoutButton() {
        return $(`~logoutButton`)
    }
}

export default new Common();

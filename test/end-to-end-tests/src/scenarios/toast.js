/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const {acceptToast, rejectToast} = require("../usecases/toasts");

module.exports = async function toastScenarios(alice, bob) {
    console.log(" checking and clearing all toasts:");

    alice.log.startGroup(`clears toasts`);
    await acceptToast(alice, "Notifications");
    await acceptToast(alice, "Help us improve Riot");
    alice.log.endGroup();

    bob.log.startGroup(`clears toasts`);
    await rejectToast(bob, "Notifications");
    await rejectToast(bob, "Help us improve Riot");
    bob.log.endGroup();
};

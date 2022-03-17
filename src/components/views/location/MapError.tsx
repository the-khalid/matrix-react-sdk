/*
Copyright 2022 The Matrix.org Foundation C.I.C.

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

import React from 'react';

import { Icon as WarningBadge } from '../../../../res/img/element-icons/warning-badge.svg';
import { _t } from '../../../languageHandler';
import AccessibleButton from '../elements/AccessibleButton';
import Heading from '../typography/Heading';
import { getLocationShareErrorMessage, LocationShareError } from './LocationShareErrors';

interface Props {
    onFinished: () => void;
    error: LocationShareError;
}

export const MapError: React.FC<Props> = ({
    onFinished, error,
}) => (<div data-test-id='location-picker-error' className="mx_MapError">
    <WarningBadge className="mx_MapError_icon" />
    <Heading className="mx_MapError_heading" size='h3'>{ _t("Unable to load map") }</Heading>
    <p>
        { getLocationShareErrorMessage(error) }
    </p>
    <AccessibleButton element='button' kind="primary" onClick={onFinished}>{ _t("OK") }</AccessibleButton>
</div>);

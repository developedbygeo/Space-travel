import { useState } from 'react';

import _ from 'lodash';

import * as data from '../assets/data.json';

type DataJSON = typeof data;
type IdentifierType = keyof DataJSON;
type Category = typeof data[IdentifierType];
type ObjectJSON = typeof data[IdentifierType][0];

const useData = (identifier: IdentifierType): [ObjectJSON, Category, (lookup: string) => void] => {
    const currentCategory = data[identifier];
    const [currentObject, setCurrentObject] = useState<ObjectJSON>(data[identifier][0]);

    const changeObjectHandler = (lookup: string): void => {
        const newObject = _.find(currentCategory, { name: lookup }) as ObjectJSON;
        setCurrentObject(newObject);
    };
    return [currentObject, data[identifier], changeObjectHandler];
};

export default useData;

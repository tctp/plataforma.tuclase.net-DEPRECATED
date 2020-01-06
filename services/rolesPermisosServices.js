import {apiSeverBase} from '../config/base';
import fetch from 'isomorphic-unfetch';
import { cleanStrings } from './cleanStrings';

class RolesPermisosServices {
    async seachRolesPermisos(lmsCode, tool) {
        tool = cleanStrings.getCleanedString(tool);
        let url = `${apiSeverBase}/api/rolesPermisos/search/${lmsCode}/${tool ? `?tool=${tool}`: ''}`;
        return await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => { return res })
            .catch(error => { return error });
    }
}

export const rolesPermisosServices = new RolesPermisosServices()
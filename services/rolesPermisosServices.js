import {apiSeverBase} from '../config/base';
import fetch from 'isomorphic-unfetch'

class RolesPermisosServices {
    async seachRolesPermisos(lmsCode, tool){                   

        return await fetch(`${apiSeverBase}/api/rolesPermisos/search/${lmsCode}/?tool=${tool}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {return res })
        .catch(error => {return error });
    }
}

export const rolesPermisosServices = new RolesPermisosServices()
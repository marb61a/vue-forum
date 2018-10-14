import {helpers as vuelidateHelpers} from 'vuelidate/lib/validators'
import { resolve } from 'url';

export const uniqueUsername = (value) => {
  if (!vuelidateHelpers.req(value)) {
    return true
  }

  return new Promise((resolve, reject) => {

  })
}

export const uniqueEmail = (value) => {
  if (!vuelidateHelpers.req(value)) {
    return true
  }

  return new Promise((resolve, reject) => {

  })
}

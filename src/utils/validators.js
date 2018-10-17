import {helpers as vuelidateHelpers} from 'vuelidate/lib/validators'
import { resolve } from 'url'

export const uniqueUsername = (value) => {
  if (!vuelidateHelpers.req(value)) {
    return true
  }

  return new Promise((resolve, reject) => {

  })
}

export const supportedImageFile = (value) => {
  if (!vuelidateHelpers.req(value)) {
    return true
  }

  const supported = ['jpg', 'jpeg', 'gif', 'png', 'svg']
  const suffix = value.split('.').pop()
  return supported.includes(suffix)
}

export const responseOk = (value) => {
  if (!vuelidateHelpers.req(value)) {
    return true
  }

  return new Promise((resolve, reject) => {
    fetch(value)
      .then(response => resolve(response.ok))
      .catch(() => resolve(false))
  })
}

export const uniqueEmail = (value) => {
  if (!vuelidateHelpers.req(value)) {
    return true
  }

  return new Promise((resolve, reject) => {

  })
}

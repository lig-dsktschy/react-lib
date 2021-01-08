import React from 'react'

import $$ from '../stylesheets/button1.scss'

import __ from 'i18next';
import en from '../languages/button1/en.json'
import jp from '../languages/button1/jp.json'
import ko from '../languages/button1/ko.json'
import sc from '../languages/button1/sc.json'
import tc from '../languages/button1/tc.json'

const defaultLng = 'en'
__.init({
  lng: defaultLng,
  keySeparator: '|',
  resources: { en, jp, sc, tc, ko }
}, (error) => {
  if (error) console.error(error)
})

const Button = props => (
  <button class={$$['button']}>
    {__.t('button:Submit', { lng: props.lng || defaultLng })}
  </button>
)

export default Button

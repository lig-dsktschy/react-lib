import React from 'react'

import $$ from '../stylesheets/button2.scss'

import __ from 'i18next';
import en from '../languages/button2/en.json'
import jp from '../languages/button2/jp.json'
import ko from '../languages/button2/ko.json'
import sc from '../languages/button2/sc.json'
import tc from '../languages/button2/tc.json'

import checkSvg from '../images/button2/check.svg'

const defaultLng = 'en'
__.init({
  lng: defaultLng,
  keySeparator: '|',
  resources: { en, jp, sc, tc, ko }
}, (error) => {
  if (error) console.error(error)
})

const Button2 = props => (
  <button class={$$['button2']}>
    <img
      src={checkSvg}
      alt=""
      className={$$['image']}
    />
    {__.t('button2:Submit', { lng: props.lng || defaultLng })}
  </button>
)

export default Button2

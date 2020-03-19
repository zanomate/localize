import React from 'react'
import Localization from '../../src/components/Localization'
import initI18n from '../../src/helpers/initI18n'

initI18n(['en', 'it'], ['stories'])

const withContext = (Story) => {
  return (
    <Localization defaultNS="stories">
      <Story />
    </Localization>
  )
}

export default withContext

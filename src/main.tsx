import React from 'react'
import ReactDOM from 'react-dom'
import './shared/style.scss'
import {App} from './app'
import {DevSupport} from '@react-buddy/ide-toolbox'
import {ComponentPreviews, useInitial} from './dev'

ReactDOM.render(
  <DevSupport ComponentPreviews={ComponentPreviews}
              useInitialHook={useInitial}
  >
    <App/>
  </DevSupport>,
  document.getElementById('root')
)

import React, { Component, useEffect, useState } from 'react'

import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'

import { translateMarkdown } from '@/utils'

function MdEditor(props) {
  // useEffect(() => {}, [])

  // return <textarea id='simple-editor' style={{ display: 'none' }} />
  // TODO:暂时隐藏预览渲染
  // previewRender: translateMarkdown
  return (
    <SimpleMDE
      value={props.value}
      onChange={props.onChange}
      options={{ autofocus: true, autosave: {uniqueId: '', enabled: true}}}
    />
  )
}

export default MdEditor

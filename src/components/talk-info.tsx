import React from 'react'
import { Talk } from '../interfaces'

type Props = {
  selectedTalk: Talk
}

const TalkInfo: React.FC<Props> = ({ selectedTalk }) => (
  <section className="talk-info">
    <h3>{selectedTalk.title}</h3>
    <h4>{selectedTalk.speakers.join(' / ')}</h4>
    <div>{selectedTalk.description}</div>
  </section>
)

export default TalkInfo

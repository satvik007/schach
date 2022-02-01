import React from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Dialog from '@radix-ui/react-dialog'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

type PlayComponentState = {
  aiInfo: string
}

export default class PlayComponent extends React.Component<unknown, PlayComponentState> {
  constructor(props: unknown) {
    super(props)
    this.state = {
      aiInfo: 'Stockfish 14 level 1',
    }
  }

  render() {
    const { aiInfo } = this.state
    return (
      <Dialog.Root>
        <Dialog.Trigger className="play-button" />
        <Dialog.Portal>
          {/*<Dialog.Overlay className="modal-overlay"/>*/}
          <Dialog.Content
            className="modal modal-container"
            title="Play with the computer"
            aria-describedby="Choose the level of the computer and then click on the color of the pieces you want to play with."
          >
            <div className="modal-content">
              <h2>Play with the computer</h2>
            </div>

            <Dialog.Close className="close">
              <Cross2Icon />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }
}

function SelectLevelComponent(props: { aiInfo: string; onValueChange: (value: string) => void }) {
  return (
    <div className="level button">
      <div id="config_level">
        <RadioGroup.Root onValueChange={props.onValueChange}>
          {Array(8).map((_, i) => (
            <RadioGroup.Item key={i + 1} value={`${i + 1}`}>
              <RadioGroup.Indicator />
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>
      </div>
      <div className="ai_info">{props.aiInfo}</div>
    </div>
  )
}

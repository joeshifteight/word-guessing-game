import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  guesses: string[]
  handleClose: () => void
}

export const HelpModal = ({
  isOpen,
  guesses,
  handleClose
}: Props) => {
  console.log("HelpModal...")

  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source word guessing game -{' '}
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        guesses[0]
      </p>
    </BaseModal>
  )
}

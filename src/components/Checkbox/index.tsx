import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import './styles.css';

const Check = () => {
  return (
    <Checkbox.Root className="CheckboxRoot" id="c1">
      <Checkbox.Indicator className="CheckboxIndicator">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
  )
}

export default Check;
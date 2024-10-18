/* eslint-disable react-hooks/rules-of-hooks */
import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import {decorators} from '@.storybook/decorators';
import OTPField from './OtpField';

const meta: Meta<typeof OTPField> = {
  title: 'Elements/Forms/OTPField',
  component: OTPField,
  decorators: decorators,
  argTypes: {
    maximumCodeLength: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    maximumCodeLength: 4,
  },
};

export default meta;

type Story = StoryObj<typeof OTPField>;

export const Basic: Story = {
  render: args => {
    const [code, setCode] = useState('');
    const [isPinReady, setIsPinReady] = useState(false);

    return (
      <OTPField
        setIsPinReady={setIsPinReady}
        maximumCodeLength={args.maximumCodeLength}
        code={code}
        setCode={setCode}
      />
    );
  },
};

export const CodeComplete: Story = {
  render: () => {
    const [code, setCode] = useState('123456');
    const [isPinReady, setIsPinReady] = useState(true);

    return (
      <OTPField
        setIsPinReady={setIsPinReady}
        maximumCodeLength={6}
        code={code}
        setCode={setCode}
      />
    );
  },
};

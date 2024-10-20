import { decorators } from '@.storybook/decorators';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Elements/Disclosure/Accordion',
  component: Accordion,
  decorators: decorators
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>How do I place an order?</Accordion.Header>
        <Accordion.Content>
          To place an order, simply select the products you want, proceed to checkout, provide
          shipping and payment information, and finalize your purchase.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
};

export const MultipleItems: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>How do I place an order?</Accordion.Header>
        <Accordion.Content>
          To place an order, simply select the products you want, proceed to checkout, provide
          shipping and payment information, and finalize your purchase.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item>
        <Accordion.Header>What payment methods do you accept?</Accordion.Header>
        <Accordion.Content>
          We accept all major credit cards, including Visa, Mastercard, and American Express. We
          also support payments through PayPal.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
};

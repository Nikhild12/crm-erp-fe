import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Radio, Select } from 'antd';
import { validatePhoneNumber } from '@/utils/helpers';

export default function OrdersForm({ isUpdateForm = false }) {
  const [customerValue, setCustomerValue] = useState(false);
  const onSelectCustomerType = (e) => {
    console.log('radio checked', customerValue);
    // setCustomerValue(e.target.value);
  };
  const validateEmptyString = (_, value) => {
    if (value && value.trim() === '') {
      return Promise.reject(new Error('Field cannot be empty'));
    }

    return Promise.resolve();
  };

  useEffect(() => {
    console.log('radio checked', customerValue);
  }, [customerValue]);

  return (
    <>
      <Form.Item
        label="Existing Customer"
        name="customer"
        rules={[
          {
            required: true,
            message: 'Please input your company name!',
          },
        ]}
      >
        <Radio.Group
          onChange={onSelectCustomerType}
          defaultValue={customerValue}
          value={customerValue}
        >
          <Radio value={true}>Yes</Radio>
          <Radio value={false}>No</Radio>
        </Radio.Group>
      </Form.Item>
      {customerValue && (
        <Form.Item
          label="Company Name"
          name="company"
          rules={[
            {
              required: true,
              message: 'Please input your company name!',
            },
          ]}
        >
          <Select
            labelInValue
            defaultValue={{
              value: 'lucy',
              label: 'Lucy (101)',
            }}
            style={{
              width: 120,
            }}
            // onChange={handleChange}
            options={[
              {
                value: 'jack',
                label: 'Jack (100)',
              },
              {
                value: 'lucy',
                label: 'Lucy (101)',
              },
            ]}
          />
        </Form.Item>
      )}
      {/* <Form.Item
        label="Company Name"
        name="company"
        rules={[
          {
            required: true,
            message: 'Please input your company name!',
          },
          {
            validator: validateEmptyString,
            message: 'Please input valid value!',
          },
        ]}
      >
        <Input />
      </Form.Item> */}
      <Form.Item
        label="Surname"
        name="managerSurname"
        rules={[
          {
            required: true,
            message: 'Please input your surname!',
          },
          {
            validator: validateEmptyString,
            message: 'Please input valid value!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="managerName"
        rules={[
          {
            required: true,
            message: 'Please input your manager name!',
          },
          {
            validator: validateEmptyString,
            message: 'Please input valid value!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone!',
          },
          {
            validator: validateEmptyString,
            message: 'Please enter valid phone number!',
          },
          {
            pattern: validatePhoneNumber,
            message: 'Please enter valid phone number!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
          {
            validator: validateEmptyString,
            message: 'Please input valid value!',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}

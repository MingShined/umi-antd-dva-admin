/**
 * @Create By MingShined
 * @Date 2018/09/11
 * @name 省市区级联组件
 */
import React, { Component, Fragment } from 'react';
import { Input, Form, Select, Col, Cascader } from 'antd';
import { Basic } from 'src/types';
import { CityPickerProps } from '.';
import address from './address';
import { transform } from './utils';
const FormItem = Form.Item;
const Option = Select.Option;

export default class Cascade extends Component<CityPickerProps, Basic.BaseProps> {
  render() {
    const {
      showCity,
      showArea,
      onChange,
      value,
      placeholder,
      changeOnSelect
    } = this.props;
    let options = transform(address, 0, 3);
    if (!showCity && !showArea) {
      options = transform(address, 0, 1);
    }
    if (showCity && !showArea) {
      options = transform(address, 0, 2);
    }
    return (
      <Cascader
        placeholder={placeholder}
        options={options}
        changeOnSelect={changeOnSelect}
        allowClear
        onChange={onChange}
        value={value}
      />
    );
  }
}

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, Form, Select, Input, message } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

export const BaseFormModal = forwardRef((props, ref) => {
  const [modal_form] = Form.useForm();

  const [modalConfig, setConfig] = useState({
    titleText: '',
    confirmLoading: false,
    visible: false,
  });
  useImperativeHandle(ref, () => ({
    add,
    edit,
  }));
  const add = () => {
    modal_form.resetFields();
    setConfig({
      titleText: '新增用户',
      confirmLoading: false,
      visible: true,
    });
  };
  const edit = (record) => {
    setConfig({
      titleText: '编辑用户',
      confirmLoading: false,
      visible: true,
    });
    console.log(record);
    modal_form.resetFields();
    modal_form.setFieldsValue(record);
  };
  const close = () => {
    setConfig({
      titleText: '编辑用户',
      confirmLoading: false,
      visible: false,
    });
  };
  const handleOk = () => {
    modal_form
      .validateFields()
      .then((values) => {
        console.log(values);
        message.success('验证成功');
        /*
    values:
      {
        username: 'username',
        password: 'password',
      }
    */
      })
      .catch((errorInfo) => {
        message.warning('验证失败');
      });
  };
  const handleCancel = () => {
    close();
  };
  const blurSearch = () => {};
  const seleChange = () => {};
  return (
    <div ref={ref}>
      <Modal
        title={modalConfig.titleText}
        visible={modalConfig.visible}
        getContainer={false}
        confirmLoading={modalConfig.confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="EditUserForm" form={modal_form} initialValues={{}}>
          <Form.Item
            label="用户账号"
            name="phone"
            onBlur={blurSearch}
            rules={[{ required: true, message: '请输入用户账号' }]}
          >
            <Input style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="会员折扣" name="discount" rules={[{ required: true, message: '请输入会员折扣' }]}>
            <Input style={{ width: 100 }} />
          </Form.Item>
          <Form.Item label="用户状态" name="status" rules={[{ required: true, message: '请选择用户状态' }]}>
            <Select style={{ width: 100 }} onChange={seleChange} placeholder="请选择">
              <Option value="1">激活</Option>
              <Option value="0">未激活</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注"
            name="remarks"
            rules={[{ required: true, message: '请输入备注' }]}
          >
            <TextArea rows={4} className={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
});

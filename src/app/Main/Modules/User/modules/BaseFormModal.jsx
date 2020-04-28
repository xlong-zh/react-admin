import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Modal, Form, Select, Input, message } from 'antd';
import { http } from 'utils/http';

const { Option } = Select;
const { TextArea } = Input;

export const BaseFormModal = forwardRef((props, ref) => {
  const [modal_form] = Form.useForm();

  const [modalConfig, setConfig] = useState({
    titleText: '',
    confirmLoading: false,
    visible: false,
    id: null,
  });
  // ref暴露函数
  useImperativeHandle(ref, () => ({
    add,
    edit,
  }));
  const add = () => {
    modal_form.resetFields();
    setConfig({ ...modalConfig, titleText: '新增用户', visible: true, id: null });
  };
  const edit = (record) => {
    setConfig({ ...modalConfig, titleText: '编辑用户', visible: true, id: record.id });
    console.log(record);
    modal_form.resetFields();
    modal_form.setFieldsValue(record);
  };
  const close = () => {
    setConfig({ ...modalConfig, visible: false });
  };
  const handleOk = () => {
    modal_form.validateFields().then(async (values) => {
      let params = modal_form.getFieldsValue();
      let method = '';
      let httpurl = '/admin/member/addOrUpdateMember';
      console.log(modalConfig.id);
      if (modalConfig.id) {
        // 编辑
        method = 'put';
        params.id = modalConfig.id;
      } else {
        //新增
        method = 'post';
      }
      console.log(params);
      setConfig({ ...modalConfig, confirmLoading: true });

      const res = await http.request({
        method: method,
        url: httpurl,
        data: params,
      });
      setConfig({ ...modalConfig, confirmLoading: false });
      if (res.data.code == '200') {
        message.success('修改用户信息成功!');
        setConfig({ ...modalConfig, visible: false });
        props.getTableData();
      } else {
        message.error(res.data.message);
      }
    });
  };
  const handleCancel = () => {
    close();
  };
  const blurSearch = (e) => {
    //失焦搜索用户
    // console.log(e.target.value);
  };
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

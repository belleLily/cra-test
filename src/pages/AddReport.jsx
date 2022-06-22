import React, { memo, useState } from "react";
import { Form, Button, Select, Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const AddReport = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleCancel = () => this.setState({ previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
  };

  const handleChange = ({ fileList }) => {};

  const handleConfirm = async () => {
    const values = await form.validateFields();
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Form
      form={form}
      name="form"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
    >
      <Form.Item
        label="主将"
        name="username"
        rules={[{ required: true, message: "请选择主将" }]}
      >
        <Select style={{ width: "400px" }}>
          <Select.Option>1</Select.Option>
          <Select.Option>2</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="副将1"
        name="username"
        rules={[{ required: true, message: "请选择副将1" }]}
      >
        <Select style={{ width: "400px" }}>
          <Select.Option>武将1</Select.Option>
          <Select.Option>武将2</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="副将2"
        name="username"
        rules={[{ required: true, message: "请选择副将1 " }]}
      >
        <Select style={{ width: "400px" }}>
          <Select.Option>1</Select.Option>
          <Select.Option>2</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="战报"
        name="username"
        rules={[{ required: true, message: "请上传战报" }]}
      >
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </Form.Item>
      <Button
        type="primary"
        className="confirm_btn"
        size="large"
        onClick={handleConfirm}
      >
        确认
      </Button>
    </Form>
  );
};

export default memo(AddReport);

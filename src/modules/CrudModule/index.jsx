import React, { useLayoutEffect, useEffect, useState } from 'react';
import { Row, Col, Button, Divider } from 'antd';
import {
  MenuFoldOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';

import CreateForm from '@/components/CreateForm';
import UpdateForm from '@/components/UpdateForm';
import DeleteModal from '@/components/DeleteModal';
import ReadItem from '@/components/ReadItem';
import SearchItem from '@/components/SearchItem';

import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentItem } from '@/redux/crud/selectors';
import { crud } from '@/redux/crud/actions';
import { useCrudContext } from '@/context/crud';

import { CrudLayout } from '@/layout';

import CrudDataTable from './CrudDataTable';

function SidePanelTopContent({ config, formElements }) {
  const { crudContextAction, state } = useCrudContext();
  const { entityDisplayLabels, entity } = config;
  const { panel, collapsedBox, modal, readBox, editBox } = crudContextAction;

  const { isReadBoxOpen, isEditBoxOpen } = state;
  const { result: currentItem } = useSelector(selectCurrentItem);
  const dispatch = useDispatch();

  const [labels, setLabels] = useState('');
  useEffect(() => {
    if (currentItem) {
      const currentlabels = entityDisplayLabels.map((x) => currentItem[x]).join(' ');

      setLabels(currentlabels);
    }
  }, [currentItem]);

  const removeItem = () => {
    dispatch(crud.currentAction({ actionType: 'delete', data: currentItem }));
    modal.open();
  };
  const editItem = () => {
    dispatch(crud.currentAction({ actionType: 'update', data: currentItem }));
    editBox.open();
  };

  const show = isReadBoxOpen || isEditBoxOpen ? { opacity: 1 } : { opacity: 0 };
  return (
    <>
      <Row style={show}>
        <Col span={13}>
          <p style={{ marginBottom: '10px' }}>{labels}</p>
        </Col>
        <Col span={11}>
          <Button
            onClick={removeItem}
            type="text"
            icon={<DeleteOutlined />}
            size="small"
            style={{ float: 'right', marginLeft: '5px' }}
          >
            remove
          </Button>
          <Button
            onClick={editItem}
            type="text"
            icon={<EditOutlined />}
            size="small"
            style={{ float: 'right', marginLeft: '0px' }}
          >
            edit
          </Button>
        </Col>

        <Col span={24}>
          <div className="line"></div>
        </Col>
        <div className="space10"></div>
      </Row>
      <ReadItem config={config} />
      <UpdateForm config={config} formElements={formElements} />
    </>
  );
}

function FixHeaderPanel({ config }) {
  const { crudContextAction } = useCrudContext();

  const { panel, collapsedBox, modal, readBox, editBox } = crudContextAction;

  const addNewItem = () => {
    collapsedBox.close();
  };

  const collapsePanel = () => {
    panel.collapse();
  };

  return (
    <div className="box">
      <Row gutter={12}>
        <Col className="gutter-row" span={2}>
          <Button
            style={{ marginTop: 3 }}
            type="text"
            onClick={collapsePanel}
            icon={<ArrowLeftOutlined />}
            block={true}
            size="small"
          ></Button>
        </Col>
        <Col
          className="gutter-row"
          style={{ display: 'flex', justifyContent: 'space-between' }}
          span={22}
        >
          <h1 style={{ fontSize: 20, marginBottom: 20 }}>{config.PANEL_TITLE}</h1>
          <MenuFoldOutlined onClick={collapsePanel} style={{ marginBottom: 20 }} />
        </Col>
      </Row>
      <Row gutter={8}>
        <Col className="gutter-row" span={21}>
          <SearchItem config={config} />
        </Col>
        <Col className="gutter-row" span={3}>
          <Button onClick={addNewItem} block={true} icon={<PlusOutlined />}></Button>
        </Col>
      </Row>
    </div>
  );
}

function CrudModule({ config, createForm, updateForm }) {
  const dispatch = useDispatch();
  console.log('createForm---', createForm);

  useLayoutEffect(() => {
    dispatch(crud.resetState());
  }, []);

  return (
    <CrudLayout
      config={config}
      fixHeaderPanel={<FixHeaderPanel config={config} />}
      sidePanelBottomContent={<CreateForm config={config} formElements={createForm} />}
      sidePanelTopContent={<SidePanelTopContent config={config} formElements={updateForm} />}
    >
      <CrudDataTable config={config} />
      <DeleteModal config={config} />
    </CrudLayout>
  );
}

export default CrudModule;

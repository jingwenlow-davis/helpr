import React from 'react';
import { useField } from 'formik';
import { TextInput } from 'react-native';
import { Text } from '../../theme';

interface TextFieldProps {
  label: string;
  value?: string;
  onChaange?: Function;
}

export const TextField = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <Text>{label}</Text>
      <TextInput />
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </>
  );
};
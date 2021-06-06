import isNil from 'lodash.isnil';
import React, { useEffect, useRef, useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

type SearchFormProps = {
  value?: string;
  defaultValue?: string;
  onChange: (keyword: string) => void;
  onSubmit?: (keyword: string) => void;
};

export const SearchForm = ({
  value,
  defaultValue = '',
  onChange,
  onSubmit,
}: SearchFormProps) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (!isNil(value)) setInputValue(value);
  }, [value]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    onChange(currentValue);
    setInputValue(currentValue);
  };
  const handleKeyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onSubmit && e.key === 'Enter') onSubmit(inputValue);
  };

  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <form role="search" onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="keyword" fontSize="xs">
          Search Keyword
        </FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input
            id="keyword"
            type="search"
            name="keyword"
            spellCheck="false"
            placeholder="Search any album and artist name"
            value={inputValue}
            ref={inputRef}
            onKeyUp={handleKeyup}
            onChange={handleChange}
            onAbort={handleChange}
          />
        </InputGroup>
        <FormHelperText fontSize="xs" textAlign="right">
          (e.g. Olivia Rodrigo, BTS, Jay Chou)
        </FormHelperText>
      </FormControl>
    </form>
  );
};

export default SearchForm;

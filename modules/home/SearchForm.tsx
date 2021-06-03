import React, { useEffect, useRef, useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import {
  CloseButton,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

type SearchFormProps = {
  onChange: (keyword: string) => void;
  onSubmit: (keyword: string) => void;
  onCancel: () => void;
};

export const SearchForm = ({
  onCancel,
  onChange,
  onSubmit,
}: SearchFormProps) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
    onChange(value);
  };
  const handleKeyup = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSubmit(value);
  };

  return (
    <form role="search">
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
            placeholder="Search any artist, album, move, or podcast on iTunes"
            value={value}
            ref={inputRef}
            onKeyUp={handleKeyup}
            onChange={handleChange}
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

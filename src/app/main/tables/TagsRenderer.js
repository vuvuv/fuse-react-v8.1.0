import { Chip } from '@mui/material';
import React from 'react';

function TagsRenderer({ data }) {
  return (
    <div>
      {data.tags.map((tag) => (
        <Chip label={tag} />
      ))}
    </div>
  );
}

export default TagsRenderer;

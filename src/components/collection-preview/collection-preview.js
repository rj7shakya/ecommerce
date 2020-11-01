import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item';

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

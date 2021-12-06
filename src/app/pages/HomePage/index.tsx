import React from 'react';

export function HomePage() {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 pb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

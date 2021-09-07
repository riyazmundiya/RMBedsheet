import React, { Component } from "react";

export default function Content() {
  let toast = {
    position: "absolute",
    right: "10px",
    width: "500px",
    height: "120px",
    border: "3px solid green",
  };
  return (
    <>
      <header>
        <body>
          <div class="toast-container position-absolute end-0">
            <div
              class="toast show"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div class="toast-header">
                <img src="/image/rm.png" class="rounded me-2" alt="..." />
                <strong class="me-auto">RM BeedSheets</strong>
                <small class="text-muted">just now</small>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
              <div class="toast-body">Welcome to you ! Happy Shopping</div>
            </div>
          </div>
        </body>
      </header>
    </>
  );
}

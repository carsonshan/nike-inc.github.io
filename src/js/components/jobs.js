'use strict';
const m = require('mithril');

const jobs = {
  view() {
    return m("section.container.ncss-container.fixed-fluid.prl8-md.prl12-lg.mt6-sm",
      m(".ncss-row.bg-white.border-light-grey",
        m(".ncss-col-sm-12", [
          m("header.border-bottom-light-grey.pt2-sm.prl2-sm.pb2-sm.u-align-center",
            m("h2.ncss-brand",
              "INTERESTED IN WORKING AT NIKE"
            )
          ),
          m("article.u-align-center.text-color-grey.pt6-sm.pb6-sm",
            m("a.ncss-btn.border-light-grey.text-color-grey.ncss-brand.pt2-sm.pr5-sm.pb2-sm.pl5-sm", {
                href: 'https://jobs.nike.com/category/digital-and-technology-jobs/15675/37648/1'
              },
              "CHECK OUT THE LATEST JOB POSTINGS"
            )
          )
        ])
      )
    );
  }
};

module.exports = jobs;

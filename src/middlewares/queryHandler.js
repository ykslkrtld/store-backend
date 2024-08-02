"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// app.use(findSearchSortPage):

module.exports = (req, res, next) => {

  const filter = req.query?.filter || {};

  const search = req.query?.search || {};
  for (let key in search) search[key] = { $regex: search[key], $options: "i" };

  const sort = req.query?.sort || {};

  // PAGINATION: URL?page=1&limit=10
  // LIMIT:
  let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20)
    // Page
    let page = Number(req.query?.page)
    page = page > 0 ? page : 1
    // Skip
    let skip =Number(req.query?.skip)
    skip = skip > 0 ? skip : ((page-1) * limit)

  // Run SearchingSortingPagination engine for Model:
  res.getModelList = async function (Model, customFilters = {}, populate = null) {
    const filtersAndSearch = { ...customFilters, ...filter, ...search };
    return await Model.find(filtersAndSearch)
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate(populate);
  };

  // Details:
  res.getModelListDetails = async function (Model, customFilters = {}) {
    const filtersAndSearch = { ...customFilters, ...filter, ...search };
    const data = await Model.find(filtersAndSearch);
    let details = {
      search,
      sort,
      skip,
      limit,
      page,
      pages: {
        previous: (page > 1 ? page-1 : false),
        current: page,
        next: page + 1,
        total: Math.ceil(data.length / limit)
      },
      totalRecords: data.length,
    };
    if(details.pages.next > details.pages.total) details.pages.next = false
        if (details.totalRecords <= limit) details.pages = false
    return details;
  };

  next();
};


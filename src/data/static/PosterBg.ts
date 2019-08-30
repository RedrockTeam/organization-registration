import organizationListDetail from './OrganizationListDetail'

const posterBg = {}

for (let organization in organizationListDetail) {
  const organizationName = organizationListDetail[organization].name
  posterBg[organizationName] = {}
  const departmentList =
    organizationListDetail[organization].departmentList
  for (let value of departmentList) {
    const department = value.name
    posterBg[organizationName][department] = value.posterStyle
  }
}

export default posterBg

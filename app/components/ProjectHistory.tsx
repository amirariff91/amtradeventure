import { useState } from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'

interface Project {
  description: string
  endUser: string
  year: string
  value: string
}

export default function ProjectHistory() {
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  const projects: Project[] = [
    {
      description: "Provision to supply and install water supply piping and fittings",
      endUser: "Kemuning Liquid Mud Plant",
      year: "2023",
      value: "F"
    },
    {
      description: "Provision of Equipment and Civil works to repair limited flow drain facility",
      endUser: "FMC Wellhead Equipment Sdn Bhd",
      year: "2022",
      value: "E"
    },
    {
      description: "Provision to provide equipment, manpower and tools to repair limited flow drain facility",
      endUser: "FMC Wellhead Equipment Sdn Bhd",
      year: "2022",
      value: "A"
    },
    {
      description: "Provision of Supply Manpower Material, equipment, tools and chemical including for Solid-Mud (SPT x 15FT)",
      endUser: "Kemuning Liquid Mud Plant",
      year: "2021",
      value: "D"
    },
    {
      description: "Purchase and Mobilize of tank to store mud and chemical",
      endUser: "Mega Lestari Sdn Bhd",
      year: "2020",
      value: "F"
    },
    {
      description: "Provision to supply and install tank container to store mud and chemical",
      endUser: "EKF O&M Services Sdn Bhd",
      year: "2019",
      value: "F"
    }
    // Add more projects from the image...
  ]

  const years = [...new Set(projects.map(project => project.year))].sort((a, b) => b.localeCompare(a))
  
  const filteredProjects = projects.filter(project => {
    const matchesYear = selectedYear === 'all' || project.year === selectedYear
    const matchesSearch = searchTerm === '' || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.endUser.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesYear && matchesSearch
  })

  const getValueColor = (value: string) => {
    const colors: { [key: string]: string } = {
      'A': 'bg-emerald-100 text-emerald-800',
      'B': 'bg-blue-100 text-blue-800',
      'C': 'bg-indigo-100 text-indigo-800',
      'D': 'bg-violet-100 text-violet-800',
      'E': 'bg-purple-100 text-purple-800',
      'F': 'bg-pink-100 text-pink-800'
    }
    return colors[value] || 'bg-gray-100 text-gray-800'
  }

  return (
    <Section id="projects" hasPattern>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Track Record"
          title="Project History"
          description="A comprehensive record of our successful projects and collaborations across various industries."
        />

        <div className="mt-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search projects or clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#0088cc] bg-white/50 backdrop-blur-sm transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="pl-4 pr-8 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#0088cc] bg-white/50 backdrop-blur-sm appearance-none cursor-pointer transition-all duration-300 hover:border-[#0088cc]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-neutral-200/50 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200/50">
              <thead>
                <tr className="bg-neutral-50/50">
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/2">
                    Work Description
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    End User
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Year
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/50 bg-white/50">
                {filteredProjects.map((project, index) => (
                  <tr 
                    key={index}
                    className={`transition-all duration-300 ${
                      hoveredRow === index 
                        ? 'bg-neutral-50/80 transform scale-[1.002]' 
                        : 'hover:bg-neutral-50/50'
                    }`}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 font-medium">
                        {project.description}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {project.endUser}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {project.year}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getValueColor(project.value)}`}>
                        {project.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
          <p>
            Showing <span className="font-medium text-gray-900">{filteredProjects.length}</span> of{' '}
            <span className="font-medium text-gray-900">{projects.length}</span> projects
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Value Range:</span>
            <div className="flex gap-2">
              {['A', 'B', 'C', 'D', 'E', 'F'].map(value => (
                <span 
                  key={value}
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getValueColor(value)}`}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
} 
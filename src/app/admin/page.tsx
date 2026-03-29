'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Contact {
  id: string
  name: string
  email: string
  company: string | null
  industry: string | null
  budget: string | null
  message: string
  status: string
  createdAt: string
}

interface Influencer {
  id: string
  name: string
  platform: string
  handle: string
  followers: number | null
  niche: string | null
  country: string | null
  status: string
}

interface Company {
  id: string
  name: string
  industry: string
  country: string
  priority: string
  status: string
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [influencers, setInfluencers] = useState<Influencer[]>([])
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [contactsRes, influencersRes, companiesRes] = await Promise.all([
        fetch('/api/contact'),
        fetch('/api/influencers'),
        fetch('/api/companies'),
      ])

      if (contactsRes.ok) {
        const data = await contactsRes.json()
        setContacts(data.contacts || [])
      }

      if (influencersRes.ok) {
        const data = await influencersRes.json()
        setInfluencers(data.influencers || [])
      }

      if (companiesRes.ok) {
        const data = await companiesRes.json()
        setCompanies(data.companies || [])
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateContactStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      fetchData()
    } catch (error) {
      console.error('Error updating contact:', error)
    }
  }

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: 'bg-blue-500',
      read: 'bg-yellow-500',
      contacted: 'bg-purple-500',
      closed: 'bg-green-500',
      to_research: 'bg-gray-500',
      responded: 'bg-green-500',
      meeting: 'bg-blue-500',
      client: 'bg-green-600',
      to_contact: 'bg-gray-500',
      partnered: 'bg-green-600',
    }
    return colors[status] || 'bg-gray-500'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-[#1B4332]">Loading dashboard...</div>
      </div>
    )
  }

  const newContactsCount = contacts.filter(c => c.status === 'new').length

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#1B4332] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">NidZid Admin</h1>
            <Badge className="bg-[#D4AF37] text-black">
              {newContactsCount} New Messages
            </Badge>
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                View Website
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#1B4332]">{contacts.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">New Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500">{newContactsCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Influencers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#D4AF37]">{influencers.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Companies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#1B4332]">{companies.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="contacts">
          <TabsList className="mb-4">
            <TabsTrigger value="contacts">Contact Messages</TabsTrigger>
            <TabsTrigger value="influencers">Influencers</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
          </TabsList>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Industry</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contacts.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                        No contact messages yet. Messages will appear here when visitors submit the contact form.
                      </td>
                    </tr>
                  ) : (
                    contacts.map((contact) => (
                      <tr key={contact.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{contact.name}</td>
                        <td className="px-6 py-4 text-gray-500">{contact.email}</td>
                        <td className="px-6 py-4">{contact.company || '-'}</td>
                        <td className="px-6 py-4">{contact.industry || '-'}</td>
                        <td className="px-6 py-4">
                          <Badge className={`${getStatusColor(contact.status)} text-white`}>
                            {contact.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <select
                            className="text-sm border rounded px-2 py-1"
                            value={contact.status}
                            onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                          >
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="contacted">Contacted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Influencers Tab */}
          <TabsContent value="influencers">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Platform</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Handle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Followers</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {influencers.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                        No influencers added yet. Add influencers through the API or import from Excel.
                      </td>
                    </tr>
                  ) : (
                    influencers.map((inf) => (
                      <tr key={inf.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{inf.name}</td>
                        <td className="px-6 py-4">{inf.platform}</td>
                        <td className="px-6 py-4 text-gray-500">{inf.handle}</td>
                        <td className="px-6 py-4">{inf.followers?.toLocaleString() || '-'}</td>
                        <td className="px-6 py-4">{inf.country || '-'}</td>
                        <td className="px-6 py-4">
                          <Badge className={`${getStatusColor(inf.status)} text-white`}>
                            {inf.status}
                          </Badge>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </TabsContent>

          {/* Companies Tab */}
          <TabsContent value="companies">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Industry</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Country</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {companies.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                        No companies added yet. Add companies through the API or import from Excel.
                      </td>
                    </tr>
                  ) : (
                    companies.map((comp) => (
                      <tr key={comp.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{comp.name}</td>
                        <td className="px-6 py-4">{comp.industry}</td>
                        <td className="px-6 py-4">{comp.country}</td>
                        <td className="px-6 py-4">
                          <Badge variant={comp.priority === 'high' ? 'destructive' : 'secondary'}>
                            {comp.priority}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Badge className={`${getStatusColor(comp.status)} text-white`}>
                            {comp.status}
                          </Badge>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

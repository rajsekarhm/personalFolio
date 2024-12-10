import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>Fill out the form below to send me a message</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}


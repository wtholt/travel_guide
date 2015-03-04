json.array!(@cities) do |city|
  json.extract! city, :id, :name, :info, :population
  json.url city_url(city, format: :json)
end